import React, { useState } from 'react';
import { callGeminiAPI } from '../services/geminiService';
import { 
  Sparkles, 
  Copy, 
  Edit, 
  Share, 
  Heart, 
  Eye, 
  Zap,
  FileText,
  Star,
  TrendingUp,
  Users,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Calendar,
  Save,
  Video,
  Play,
  Image,
  MessageSquare
} from 'lucide-react';

const ContentGenerator = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('linkedin');
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [selectedContentType, setSelectedContentType] = useState('post');
  const [selectedTheme, setSelectedTheme] = useState('tech');
  const [selectedDuration, setSelectedDuration] = useState('30');
  const [generatedContent, setGeneratedContent] = useState('');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [generatedTemplate, setGeneratedTemplate] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [contentTopic, setContentTopic] = useState('');

  const contentTypes = [
    { id: 'post', name: 'Social Post', icon: FileText },
    { id: 'story', name: 'Story/Reel', icon: Video },
    { id: 'script', name: 'Video Script', icon: Play },
    { id: 'template', name: 'Design Template', icon: Image }
  ];

  const themes = [
    'Tech & Innovation', 'Business Growth', 'Motivational', 'Educational', 
    'Behind the Scenes', 'Product Demo', 'Customer Success', 'Industry News',
    'Team Culture', 'Tips & Tricks', 'Trends', 'Lifestyle'
  ];

  const durations = [
    { value: '15', label: '15 seconds' },
    { value: '30', label: '30 seconds' },
    { value: '60', label: '1 minute' },
    { value: '90', label: '1.5 minutes' },
    { value: '120', label: '2 minutes' },
    { value: '180', label: '3 minutes' }
  ];

  const platforms = [
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'blue-600' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'blue-400' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'pink-600' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'blue-600' },
    { id: 'email', name: 'Email', icon: Mail, color: 'gray-600' }
  ];

  const generateContent = async (platform) => {
    setIsGenerating(true);
    setSelectedPlatform(platform);
    
    const detailedPrompt = `
You are an expert content creator and marketing strategist for Helics.ai, an AI-powered marketing platform. Generate high-quality, engaging content based on the following specifications:

CONTENT SPECIFICATIONS:
- Platform: ${platform}
- Content Type: ${selectedContentType}
- Tone: ${selectedTemplate}
- Theme/Topic: ${contentTopic || selectedTheme}
- Duration: ${(selectedContentType === 'story' || selectedContentType === 'script') ? selectedDuration + ' seconds' : 'Standard post length'}

CONTEXT ABOUT HELICS.AI:
- AI-powered marketing platform
- Helps brands create consistent, engaging content
- Target audience: Marketing teams, agencies, content creators, SMBs
- Key features: Brand DNA analysis, content generation, competitive analysis
- Positioning: Premium AI-first solution for modern marketers

PLATFORM-SPECIFIC REQUIREMENTS:

FOR LINKEDIN:
- Professional tone even if casual style selected
- Include industry insights or business value
- Use relevant hashtags (3-5 maximum)
- Character limit: 3000 (aim for 1300-1500 for engagement)

FOR TWITTER:
- Concise, punchy content
- Character limit: 280 characters
- Use trending hashtags and emojis strategically
- Include call-to-action when appropriate

FOR INSTAGRAM:
- Visual-first approach
- Use relevant hashtags (5-10)
- Engage emotions and storytelling
- Include clear call-to-action

FOR FACEBOOK:
- Longer form content allowed
- Focus on engagement and community building
- Use questions to encourage comments
- Include relevant hashtags (2-3)

FOR EMAIL:
- Include subject line
- Clear value proposition
- Personalized greeting
- Strong call-to-action

CONTENT TYPE SPECIFIC INSTRUCTIONS:

FOR POSTS:
- Create engaging, shareable content
- Include hook in first line
- Provide value or entertainment
- End with clear call-to-action

FOR STORIES/REELS:
- Create time-stamped script format
- Include visual descriptions
- Suggest trending audio/music
- Include text overlay suggestions
- Focus on attention-grabbing hooks

FOR VIDEO SCRIPTS:
- Structure: Hook (0-5s), Problem/Context, Solution, Benefits, CTA
- Include B-roll suggestions
- Add timing markers
- Suggest visual elements and transitions

FOR TEMPLATES:
- Provide detailed design brief
- Include dimensions, colors, fonts
- Specify layout elements
- Include brand-consistent styling

GENERATE CONTENT WITH:
1. Main Content: The primary content piece
2. Caption: Optimized caption with hashtags for social posts
3. Performance Tips: 3-4 specific optimization suggestions
4. Hashtags: Platform-appropriate hashtags
5. Engagement Prediction: Estimated performance metrics

IMPORTANT GUIDELINES:
- Make content authentic and valuable, not salesy
- Include specific benefits and outcomes
- Use action verbs and power words
- Ensure brand consistency with Helics.ai positioning
- Make it actionable and practical
- Include current marketing trends and insights

FORMAT THE RESPONSE AS VALID JSON:
{
  "content": "Main content here (formatted for the specific platform and content type)",
  "caption": "Optimized caption with hashtags",
  "performanceTips": [
    "Specific optimization tip 1",
    "Specific optimization tip 2", 
    "Specific optimization tip 3"
  ],
  "hashtags": ["hashtag1", "hashtag2", "hashtag3"],
  "engagementPrediction": {
    "reach": "estimated reach",
    "engagement": "estimated engagement percentage",
    "performance": "expected performance level"
  },
  "templateSpecs": ${selectedContentType === 'template' ? `{
    "type": "Template type",
    "dimensions": "Width x Height",
    "colorScheme": ["#color1", "#color2", "#color3"],
    "fonts": ["Primary font", "Secondary font"],
    "layout": "Layout description",
    "elements": ["Element 1", "Element 2", "Element 3"]
  }` : 'null'}
}

Make the content feel authentic, valuable, and aligned with modern marketing best practices. Avoid generic corporate speak and focus on genuine value for the target audience.
`;
    
    try {
      const response = await callGeminiAPI(detailedPrompt);
      // Clean the response to ensure it's valid JSON
      const cleanedResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const aiResponse = JSON.parse(cleanedResponse);
      
      setGeneratedContent(aiResponse.content);
      setGeneratedCaption(aiResponse.caption);
      
      if (selectedContentType === 'template' && aiResponse.templateSpecs) {
        setGeneratedTemplate(aiResponse.templateSpecs);
      } else {
        setGeneratedTemplate(null);
      }
      
    } catch (error) {
      console.error('Error generating content:', error);
      // Fallback content based on selections
      const fallbackContent = generateFallbackContent(platform, selectedContentType, selectedTemplate);
      setGeneratedContent(fallbackContent.content);
      setGeneratedCaption(fallbackContent.caption);
      setGeneratedTemplate(fallbackContent.template);
    }
    
    setIsGenerating(false);
  };

  const generateFallbackContent = (platform, contentType, template) => {
    const fallbackTemplates = {
      post: {
        professional: {
          linkedin: "🚀 Excited to share how AI is transforming content marketing at Helics.ai!\n\nKey benefits we're seeing:\n✅ 90% faster content creation\n✅ Brand consistency across platforms\n✅ Data-driven optimization\n\nReady to revolutionize your marketing? Let's connect! 💼\n\n#AI #Marketing #Innovation #ContentStrategy",
          twitter: "🚀 AI-powered marketing is here!\n\n90% faster content creation ⚡\nPerfect brand consistency 🎯\nSmart optimization 📈\n\nThe future of marketing is now. Ready to join? 🤖\n\n#AI #Marketing #Innovation",
          instagram: "✨ Behind the magic at Helics.ai!\n\nOur AI creates amazing content 24/7 for brands worldwide. From posts to campaigns - we've got you covered! 🎨\n\n#AI #Marketing #Innovation #ContentCreation #TechLife",
          facebook: "We're excited to introduce Helics.ai - where AI meets marketing brilliance! 🚀\n\nOur platform understands your brand DNA and creates content that truly represents your voice. Whether you need social posts, campaigns, or strategies - we're here for you.\n\nJoin thousands of brands already transforming their marketing with AI!\n\n#AIMarketing #Innovation",
          email: "Subject: Transform Your Marketing with AI\n\nHi there!\n\nTired of endless hours creating content that doesn't capture your brand voice?\n\nHelics.ai changes everything. Our AI learns your brand DNA and creates content that sounds exactly like you.\n\n✅ 90% faster creation\n✅ Perfect consistency\n✅ Multi-platform optimization\n\nReady to revolutionize your marketing?\n\nBest regards,\nThe Helics.ai Team"
        },
        casual: {
          linkedin: "Hey everyone! 👋\n\nJust had to share what we've been building at Helics.ai. It's honestly mind-blowing how AI can understand your brand's DNA and create content that feels like YOU wrote it.\n\nNo more staring at blank pages... 🤔\n\nWhat's your biggest content challenge? Drop it below! 👇",
          twitter: "This is actually wild... 🤯\n\nOur AI just created a week's worth of content in 30 seconds. And it's GOOD content.\n\nBye bye late-night caption writing 😴\n\n#AI #ContentCreator #MarketingHack",
          instagram: "POV: You found AI that actually gets your brand 🤖✨\n\nNo more creative blocks. No more inconsistency. Just pure marketing magic!\n\nWho else is excited about the future? 🙌\n\n#AIMarketing #ContentMagic #Innovation",
          facebook: "Can we talk about how crazy AI has gotten? 🤯\n\nI just watched our AI create a month's worth of content in under a minute. And honestly? It's better than what I could write myself.\n\nThe future is here and it's amazing.\n\nAnyone else playing with AI tools? What's your favorite discovery?\n\n#AI #MarketingLife",
          email: "Subject: This AI thing is getting wild...\n\nHey!\n\nOkay, I had to share this because it's blowing my mind.\n\nI've been testing AI that learns your brand voice and creates content that sounds EXACTLY like you. Scary-good accurate.\n\nSocial posts, emails, campaigns - everything. In seconds.\n\nWant to see what the fuss is about?\n\nCheers!"
        }
      }
    };

    const content = fallbackTemplates[contentType]?.[template]?.[platform] || 
                   fallbackTemplates[contentType]?.[template]?.linkedin ||
                   "AI-generated content will appear here based on your selections!";
    
    return {
      content,
      caption: `${template === 'professional' ? 'Transform your marketing with AI-powered content creation.' : 'When AI creates better content than you do 😅'} #AI #Marketing #Innovation`,
      template: contentType === 'template' ? {
        type: 'Social Media Template',
        dimensions: '1080x1080px',
        colorScheme: ['#8B5CF6', '#1F2937', '#FFFFFF'],
        fonts: ['Poppins', 'Inter'],
        layout: 'Modern, clean design',
        elements: ['Logo', 'Text content', 'Call-to-action']
      } : null
    };
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    // You could add a toast notification here
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Content Generator</h1>
          <p className="text-gray-600 mt-1">Create engaging content for any platform in seconds</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save Template</span>
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-medium flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Bulk Generate</span>
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Settings Panel */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-gray-900">Content Settings</h3>
          
          <div className="space-y-6">
            {/* Platform Selection */}
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-900">Platform</label>
              <div className="grid grid-cols-2 gap-3">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`flex items-center space-x-3 p-3 rounded-xl border transition-all duration-200 ${
                      selectedPlatform === platform.id 
                        ? 'border-purple-500 bg-purple-50 shadow-sm' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <platform.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Content Type Selection */}
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-900">Content Type</label>
              <div className="grid grid-cols-2 gap-3">
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedContentType(type.id)}
                    className={`flex items-center space-x-3 p-3 rounded-xl border transition-all duration-200 ${
                      selectedContentType === type.id 
                        ? 'border-purple-500 bg-purple-50 shadow-sm' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <type.icon className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-900">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Selection */}
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-900">Theme</label>
              <select 
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {themes.map((theme) => (
                  <option key={theme} value={theme.toLowerCase().replace(/\s+/g, '-')}>{theme}</option>
                ))}
              </select>
            </div>

            {/* Duration for Video Content */}
            {(selectedContentType === 'story' || selectedContentType === 'script') && (
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-900">Duration</label>
                <div className="grid grid-cols-3 gap-2">
                  {durations.map((duration) => (
                    <button
                      key={duration.value}
                      onClick={() => setSelectedDuration(duration.value)}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        selectedDuration === duration.value 
                          ? 'border-purple-500 bg-purple-50 text-purple-700' 
                          : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      {duration.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Tone Selection */}
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-900">Tone</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedTemplate('professional')}
                  className={`p-3 rounded-xl border transition-all duration-200 ${
                    selectedTemplate === 'professional' 
                      ? 'border-purple-500 bg-purple-50 shadow-sm' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-medium text-gray-900">Professional</span>
                </button>
                <button
                  onClick={() => setSelectedTemplate('casual')}
                  className={`p-3 rounded-xl border transition-all duration-200 ${
                    selectedTemplate === 'casual' 
                      ? 'border-purple-500 bg-purple-50 shadow-sm' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-medium text-gray-900">Casual</span>
                </button>
              </div>
            </div>
            
            {/* Topic Input */}
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-900">Topic/Keywords</label>
              <input
                type="text"
                value={contentTopic}
                onChange={(e) => setContentTopic(e.target.value)}
                placeholder="AI marketing, content creation, innovation..."
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            {/* Generate Button */}
            <button
              onClick={() => generateContent(selectedPlatform)}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-2 font-medium"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Generate Content</span>
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* Generated Content */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Generated Content</h3>
            {generatedContent && (
              <div className="flex items-center space-x-2">
                <button 
                  onClick={copyToClipboard}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100">
                  <Share className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          
          <div className="min-h-[400px]">
            {generatedContent ? (
              <div className="space-y-6">
                {/* Platform Header */}
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                  {platforms.find(p => p.id === selectedPlatform) && (
                    <>
                      <div className="p-2 rounded-lg bg-white shadow-sm">
                        {React.createElement(platforms.find(p => p.id === selectedPlatform).icon, {
                          className: "w-5 h-5 text-blue-600"
                        })}
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 capitalize">{selectedPlatform}</span>
                        <p className="text-sm text-gray-500 capitalize">
                          {selectedContentType} • {selectedTemplate} tone
                          {(selectedContentType === 'story' || selectedContentType === 'script') && 
                            ` • ${durations.find(d => d.value === selectedDuration)?.label}`
                          }
                        </p>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Generated Content */}
                <div className="space-y-4">
                  {selectedContentType === 'template' && generatedTemplate ? (
                    <div className="border border-gray-200 rounded-xl p-6 bg-gradient-to-r from-purple-50 to-blue-50">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Image className="w-5 h-5 mr-2 text-purple-600" />
                        Template Design Brief
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Type:</strong> {generatedTemplate.type}</p>
                          <p><strong>Dimensions:</strong> {generatedTemplate.dimensions}</p>
                          <p><strong>Layout:</strong> {generatedTemplate.layout}</p>
                        </div>
                        <div>
                          <p><strong>Colors:</strong> {generatedTemplate.colorScheme?.join(', ')}</p>
                          <p><strong>Fonts:</strong> {generatedTemplate.fonts?.join(', ')}</p>
                          <p><strong>Elements:</strong> {generatedTemplate.elements?.join(', ')}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900 flex items-center">
                          {selectedContentType === 'story' && <Video className="w-4 h-4 mr-2 text-purple-600" />}
                          {selectedContentType === 'script' && <Play className="w-4 h-4 mr-2 text-purple-600" />}
                          {selectedContentType === 'post' && <FileText className="w-4 h-4 mr-2 text-purple-600" />}
                          {selectedContentType === 'story' ? 'Story/Reel Script' : 
                           selectedContentType === 'script' ? 'Video Script' : 'Content'}
                        </h4>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          AI Generated
                        </span>
                      </div>
                      <div className="whitespace-pre-wrap text-gray-700 leading-relaxed text-sm">
                        {generatedContent}
                      </div>
                    </div>
                  )}

                  {/* Generated Caption */}
                  {selectedContentType !== 'template' && (
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900 flex items-center">
                          <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
                          Caption
                        </h4>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          AI Generated
                        </span>
                      </div>
                      <div className="text-gray-700 text-sm">
                        {generatedCaption}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Performance Predictions */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-600">
                      {selectedContentType === 'story' ? '92%' : selectedContentType === 'script' ? '88%' : '85%'} engagement prediction
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600">
                      {selectedContentType === 'story' ? '3.2K' : selectedContentType === 'script' ? '5.8K' : '1.2K'} estimated reach
                    </span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
                    {selectedContentType === 'template' ? 'Download Template' : 'Schedule Post'}
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium">
                    Save Draft
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {selectedContentType === 'story' ? <Video className="w-8 h-8 text-gray-400" /> :
                     selectedContentType === 'script' ? <Play className="w-8 h-8 text-gray-400" /> :
                     selectedContentType === 'template' ? <Image className="w-8 h-8 text-gray-400" /> :
                     <Sparkles className="w-8 h-8 text-gray-400" />}
                  </div>
                  <p className="text-lg font-medium text-gray-900 mb-2">Ready to create amazing {selectedContentType}?</p>
                  <p className="text-gray-500">
                    {selectedContentType === 'story' ? 'Generate viral stories and reels with AI' :
                     selectedContentType === 'script' ? 'Create compelling video scripts in seconds' :
                     selectedContentType === 'template' ? 'Design beautiful templates instantly' :
                     'Select your platform and settings, then click "Generate Content"'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Content Templates */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-gray-900">Quick Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { id: 'product-launch', name: 'Product Launch', icon: Zap, color: 'bg-blue-100 text-blue-600', type: 'post' },
            { id: 'story-template', name: 'Viral Story', icon: Video, color: 'bg-pink-100 text-pink-600', type: 'story' },
            { id: 'video-script', name: 'Video Script', icon: Play, color: 'bg-green-100 text-green-600', type: 'script' },
            { id: 'design-template', name: 'Design Template', icon: Image, color: 'bg-purple-100 text-purple-600', type: 'template' },
            { id: 'educational', name: 'Educational Post', icon: FileText, color: 'bg-orange-100 text-orange-600', type: 'post' },
            { id: 'behind-scenes', name: 'Behind Scenes', icon: Eye, color: 'bg-indigo-100 text-indigo-600', type: 'story' },
            { id: 'testimonial', name: 'User Testimonial', icon: Star, color: 'bg-yellow-100 text-yellow-600', type: 'post' },
            { id: 'tutorial-script', name: 'Tutorial Script', icon: Users, color: 'bg-red-100 text-red-600', type: 'script' }
          ].map((template, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedContentType(template.type);
                setTimeout(() => generateContent(selectedPlatform), 100);
              }}
              className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors duration-200 text-left group"
            >
              <div className={`w-10 h-10 rounded-lg ${template.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                <template.icon className="w-5 h-5" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">{template.name}</h4>
              <p className="text-sm text-gray-500">
                {template.type === 'story' ? 'Engaging stories and reels' :
                 template.type === 'script' ? 'Professional video scripts' :
                 template.type === 'template' ? 'Beautiful design templates' :
                 'Social media posts'}
              </p>
            </button>
          ))}
        </div>
      </div>
      
      {/* Recent Generations */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-gray-900">Recent Generations</h3>
        <div className="space-y-4">
          {[
            { 
              platform: 'Instagram', 
              type: 'Story', 
              content: '15-second product demo reel script...', 
              time: '2 hours ago', 
              engagement: '94%',
              icon: Video,
              color: 'pink'
            },
            { 
              platform: 'LinkedIn', 
              type: 'Post', 
              content: 'Excited to share our latest innovation...', 
              time: '4 hours ago', 
              engagement: '87%',
              icon: FileText,
              color: 'blue'
            },
            { 
              platform: 'YouTube', 
              type: 'Script', 
              content: '3-minute tutorial script for AI marketing...', 
              time: '6 hours ago', 
              engagement: '91%',
              icon: Play,
              color: 'red'
            },
            { 
              platform: 'Twitter', 
              type: 'Template', 
              content: 'Quote card design template...', 
              time: '1 day ago', 
              engagement: '89%',
              icon: Image,
              color: 'purple'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg bg-${item.color}-100`}>
                  <item.icon className={`w-4 h-4 text-${item.color}-600`} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.platform} • {item.type}</p>
                  <p className="text-sm text-gray-500 truncate max-w-xs">{item.content}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">{item.engagement}</p>
                  <p className="text-xs text-gray-500">predicted</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Type Features */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 AI Content Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <h4 className="font-medium text-blue-700">Smart Posts</h4>
            </div>
            <p className="text-sm text-gray-600">AI-generated posts with captions optimized for each platform</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Video className="w-5 h-5 text-pink-600" />
              <h4 className="font-medium text-pink-700">Viral Stories</h4>
            </div>
            <p className="text-sm text-gray-600">Time-based story scripts with trending formats and music suggestions</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Play className="w-5 h-5 text-green-600" />
              <h4 className="font-medium text-green-700">Video Scripts</h4>
            </div>
            <p className="text-sm text-gray-600">Professional scripts with hooks, B-roll suggestions, and CTAs</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Image className="w-5 h-5 text-purple-600" />
              <h4 className="font-medium text-purple-700">Design Templates</h4>
            </div>
            <p className="text-sm text-gray-600">Brand-consistent templates with your colors, fonts, and style</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGenerator;