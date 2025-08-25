import React, { useState, useEffect } from 'react';
import { Shield, Eye, Users, Trophy, Bell, TrendingUp, Zap, Target, BookOpen, Settings, AlertTriangle, CheckCircle, Award, Flame } from 'lucide-react';

const AlgoLensDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [karmaScore, setKarmaScore] = useState(2847);
  const [liveAlerts, setLiveAlerts] = useState([
    { id: 1, type: 'dark-pattern', severity: 'high', platform: 'SocialApp', pattern: 'Fake Urgency Timer', time: '2 min ago', active: true },
    { id: 2, type: 'manipulation', severity: 'medium', platform: 'ShopSite', pattern: 'Scarcity Pressure', time: '5 min ago', active: true },
    { id: 3, type: 'data-harvest', severity: 'high', platform: 'NewsPortal', pattern: 'Consent Dark Pattern', time: '12 min ago', active: false }
  ]);

  const [campaigns] = useState([
    { name: 'Stop Infinite Scroll Week', participants: 15420, impact: 89, status: 'active' },
    { name: 'Cookie Banner Rebellion', participants: 8901, impact: 67, status: 'active' },
    { name: 'Notification Detox Challenge', participants: 12334, impact: 91, status: 'completed' }
  ]);

  const [whyAmISeeing] = useState([
    {
      id: 1,
      platform: 'YouTube',
      contentType: 'Video Recommendation',
      title: 'Quick 15-Minute Italian Pasta Recipe',
      reason: 'You\'re seeing this cooking video because you watched similar content for 25 minutes yesterday and liked 3 cooking videos this week.',
      confidence: 92,
      dataPoints: ['25 min watch time on cooking content yesterday', '3 cooking videos liked this week', 'High engagement with Italian recipes'],
      manipulation: 'Low',
      thumbnail: '🍝'
    },
    {
      id: 2,
      platform: 'Facebook',
      contentType: 'Sponsored Ad',
      title: 'FitLife Gym - 50% Off Membership',
      reason: 'This fitness ad appeared because you\'ve been viewing health-related content and your location data suggests gym proximity.',
      confidence: 88,
      dataPoints: ['Location near 3 gyms', 'Viewed 12 fitness posts this week', 'Searched "home workout" 2 days ago'],
      manipulation: 'Medium',
      thumbnail: '💪'
    },
    {
      id: 3,
      platform: 'Instagram',
      contentType: 'Friend\'s Post',
      title: 'Sarah\'s Weekend Hiking Adventure',
      reason: 'This post from a friend appeared at the top because you frequently engage with their content and they\'re in your \'close friends\' category.',
      confidence: 95,
      dataPoints: ['Close friends list', 'Liked last 8 posts from Sarah', 'Average 2.5 min viewing time on her content'],
      manipulation: 'Low',
      thumbnail: '🥾'
    },
    {
      id: 4,
      platform: 'TikTok',
      contentType: 'For You Page Video',
      title: 'Last-Minute Gift Ideas That Will Blow Their Mind!',
      reason: 'Algorithm detected you engage 4x longer with urgency-based content and holiday shopping season triggers.',
      confidence: 91,
      dataPoints: ['High engagement with urgency triggers', 'Shopping behavior during holidays', 'Watched similar "gift idea" videos for 18 min total'],
      manipulation: 'High',
      thumbnail: '🎁'
    },
    {
      id: 5,
      platform: 'Amazon',
      contentType: 'Product Recommendation',
      title: 'Wireless Bluetooth Headphones - Limited Time Deal',
      reason: 'Recommended because you viewed similar products 6 times this month and your audio device is 3+ years old based on browsing patterns.',
      confidence: 87,
      dataPoints: ['6 headphone searches this month', 'Browsing pattern suggests old device', 'Previous electronics purchases'],
      manipulation: 'Medium',
      thumbnail: '🎧'
    },
    {
      id: 6,
      platform: 'Twitter/X',
      contentType: 'Trending Topic',
      title: '#TechNews - Breaking: New AI Breakthrough',
      reason: 'Trending in your feed because you follow 12 tech accounts and engage heavily with AI-related content.',
      confidence: 89,
      dataPoints: ['Follows 12 tech accounts', 'High engagement with AI content', 'Retweeted 5 tech articles this week'],
      manipulation: 'Low',
      thumbnail: '🤖'
    }
  ]);

  const [activityTracking] = useState({
    currentSession: {
      platform: 'SocialApp',
      timeSpent: '23m 14s',
      actions: 847,
      manipulationExposure: 23,
      lastAlert: '2m ago'
    },
    todayStats: {
      platforms: 8,
      totalTime: '4h 32m',
      patternsBlocked: 47,
      healthScore: 72
    },
    recentActivity: [
      { time: '2m ago', platform: 'SocialApp', action: 'Blocked infinite scroll', type: 'defense' },
      { time: '5m ago', platform: 'SocialApp', action: 'Detected FOMO trigger', type: 'alert' },
      { time: '8m ago', platform: 'ShopSite', action: 'Avoided fake urgency timer', type: 'defense' },
      { time: '12m ago', platform: 'NewsPortal', action: 'Clicked emotional headline', type: 'vulnerability' },
      { time: '15m ago', platform: 'VideoStream', action: 'Took mindful break', type: 'wellness' }
    ]
  });

  const weeklyStats = {
    patternsDetected: 47,
    hoursReclaimed: 12.3,
    manipulationsStopped: 23,
    communitiesHelped: 8
  };

  const leaderboard = [
    { rank: 1, name: 'Maya Digital Guardian', score: 18459, badge: '🛡' },
    { rank: 2, name: 'Alex Privacy Warrior', score: 16823, badge: '⚔' },
    { rank: 3, name: 'Sam Pattern Hunter', score: 15991, badge: '🔍' },
    { rank: 4, name: 'You', score: 2847, badge: '🌟' },
    { rank: 5, name: 'Jordan Tech Defender', score: 2456, badge: '🔰' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newAlert = {
          id: Date.now(),
          type: ['dark-pattern', 'manipulation', 'data-harvest'][Math.floor(Math.random() * 3)],
          severity: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)],
          platform: ['SocialApp', 'ShopSite', 'NewsPortal', 'VideoStream'][Math.floor(Math.random() * 4)],
          pattern: ['Fake Timer', 'Hidden Costs', 'Confirm Shaming', 'Infinite Scroll'][Math.floor(Math.random() * 4)],
          time: 'Just now',
          active: true
        };
        setLiveAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
        setKarmaScore(prev => prev + Math.floor(Math.random() * 50) + 10);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <Icon className={w-8 h-8 ${color}} />
        <span className={text-sm font-medium px-2 py-1 rounded-full ${change > 0 ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}}>
          {change > 0 ? '+' : ''}{change}%
        </span>
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-gray-300 text-sm">{title}</p>
    </div>
  );

  const AlertItem = ({ alert }) => (
    <div className={`p-4 rounded-lg border-l-4 mb-3 ${
      alert.severity === 'high' ? 'bg-red-500/10 border-red-500' : 
      alert.severity === 'medium' ? 'bg-yellow-500/10 border-yellow-500' : 
      'bg-blue-500/10 border-blue-500'
    } ${alert.active ? 'animate-pulse' : 'opacity-70'}`}>
      <div className="flex justify-between items-start mb-2">
        <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${
          alert.severity === 'high' ? 'bg-red-500 text-white' : 
          alert.severity === 'medium' ? 'bg-yellow-500 text-black' : 
          'bg-blue-500 text-white'
        }`}>
          {alert.severity.toUpperCase()}
        </span>
        <span className="text-xs text-gray-400">{alert.time}</span>
      </div>
      <h4 className="font-semibold text-white mb-1">{alert.pattern} detected</h4>
      <p className="text-sm text-gray-300">Platform: {alert.platform}</p>
      <div className="mt-3 flex gap-2">
        <button className="text-xs px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
          Block Pattern
        </button>
        <button className="text-xs px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );

  const CampaignCard = ({ campaign }) => (
    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-white">{campaign.name}</h4>
        <span className={`text-xs px-2 py-1 rounded-full ${
          campaign.status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-gray-500/20 text-gray-300'
        }`}>
          {campaign.status}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-400">Participants</p>
          <p className="text-white font-semibold">{campaign.participants.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-400">Impact Score</p>
          <p className="text-white font-semibold">{campaign.impact}%</p>
        </div>
      </div>
      <div className="mt-3 w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: ${campaign.impact}% }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Top Navigation Bar */}
      <div className="bg-slate-800/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold">AlgoLens</h1>
              </div>
              
              {/* Navigation Menu */}
              <nav className="hidden md:flex items-center space-x-6">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'dashboard' 
                      ? 'text-cyan-400 border-b-2 border-cyan-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => setActiveTab('features')}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => setActiveTab('ai-insights')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'ai-insights' 
                      ? 'text-cyan-400 border-b-2 border-cyan-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  AI Insights
                </button>
                <button 
                  onClick={() => setActiveTab('about')}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="font-semibold text-sm">{karmaScore.toLocaleString()}</span>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-4 py-2 rounded-lg font-medium text-sm transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            See Through Every Algorithm
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Transform your digital experience with complete algorithmic transparency. With our hands-on approach to content analysis, we'll create a platform that displays your content's reasoning above all expectations, ensuring quality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-10 py-4 rounded-full font-semibold text-white text-lg transition-all transform hover:scale-105 shadow-lg">
              Start Your Journey →
            </button>
            <div className="text-gray-400">
              Trusted by <span className="font-semibold text-white text-lg">100+</span> mindful digital citizens
            </div>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex justify-center space-x-1 bg-white/5 rounded-lg p-1 max-w-5xl mx-auto">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
            { id: 'ai-insights', label: 'Why Am I Seeing This?', icon: Eye },
            { id: 'activity', label: 'Activity Tracking', icon: Target },
            { id: 'limits', label: 'Limits & Controls', icon: Settings },
            { id: 'campaigns', label: 'Campaigns', icon: Users },
            { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
            { id: 'learn', label: 'Learn', icon: BookOpen }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-2 px-3 py-3 rounded-md font-medium transition-all text-sm ${
                activeTab === id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden lg:inline">{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Digital Karma Score Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
                  🏆 Digital Karma Score
                </h2>
                <div className="text-6xl font-bold text-cyan-400 mb-4">78</div>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Excellent algorithmic awareness today! You've maintained balanced content consumption with mindful engagement.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Today's Recommendations */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    💡 Today's Recommendations
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Explore educational content algorithms for 15 minutes</span>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Review why you're seeing trending content</span>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Check platform transparency reports</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Current Achievements</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🔍</span>
                        <div>
                          <h4 className="font-semibold text-cyan-300">Algorithm Detective</h4>
                          <p className="text-sm text-gray-400">7-day transparency streak</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">👁</span>
                        <div>
                          <h4 className="font-semibold text-blue-300">Clear Vision</h4>
                          <p className="text-sm text-gray-400">Understood 95% of content reasoning</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🧠</span>
                        <div>
                          <h4 className="font-semibold text-green-300">Informed User</h4>
                          <p className="text-sm text-gray-400">Made conscious content choices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">147</div>
                <div className="text-sm text-gray-300">Algorithms Analyzed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">92%</div>
                <div className="text-sm text-gray-300">Transparency Score</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">23</div>
                <div className="text-sm text-gray-300">Insights Unlocked</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">89%</div>
                <div className="text-sm text-gray-300">Understanding Rate</div>
              </div>
            </div>

            {/* Platform Analysis & Content Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Platform Analysis */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  📊 Platform Analysis Today
                </h3>
                <div className="space-y-4">
                  {[
                    { platform: 'YouTube', algorithms: 34, transparency: 89, color: 'bg-red-500' },
                    { platform: 'Facebook', algorithms: 28, transparency: 67, color: 'bg-blue-500' },
                    { platform: 'Instagram', algorithms: 19, transparency: 73, color: 'bg-pink-500' },
                    { platform: 'TikTok', algorithms: 42, transparency: 45, color: 'bg-purple-500' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={w-3 h-3 rounded-full ${item.color}}></div>
                        <span className="font-medium text-white">{item.platform}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm font-semibold text-white">{item.algorithms} analyzed</div>
                          <div className="text-xs text-gray-400">{item.transparency}% transparent</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Insights */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  🔍 Content Insights
                </h3>
                <div className="space-y-4">
                  {[
                    { type: 'Personalized Recommendations', percentage: 45, color: 'bg-cyan-500', reason: 'Based on viewing history' },
                    { type: 'Trending Content', percentage: 28, color: 'bg-blue-500', reason: 'Popular in your area' },
                    { type: 'Sponsored Content', percentage: 15, color: 'bg-yellow-500', reason: 'Targeted advertising' },
                    { type: 'Friend Activity', percentage: 12, color: 'bg-green-500', reason: 'Social connections' }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">{item.type}</span>
                        <span className="text-white font-semibold">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={h-2 rounded-full ${item.color} transition-all duration-500}
                          style={{ width: ${item.percentage}% }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-400">{item.reason}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai-insights' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center">
                <Eye className="w-6 h-6 mr-2" />
                Why Am I Seeing This Content?
              </h2>
              <div className="text-sm text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                Real-time algorithm transparency
              </div>
            </div>
            
            <div className="text-gray-300 mb-6 bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
              <p className="text-sm">
                <strong>How it works:</strong> AlgoLens analyzes your behavior patterns and correlates them with content delivery to show you exactly why platforms are showing you specific content.
              </p>
            </div>

            {/* Content Analysis Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {whyAmISeeing.map((item) => (
                <div key={item.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{item.thumbnail}</span>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-medium text-cyan-300">{item.platform}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-400">{item.contentType}</span>
                        </div>
                        <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        item.manipulation === 'High' ? 'bg-red-500/20 text-red-300' :
                        item.manipulation === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-green-500/20 text-green-300'
                      }`}>
                        {item.manipulation} Risk
                      </span>
                      <span className="text-xs text-gray-400">{item.confidence}% confident</span>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg border-l-4 border-cyan-500">
                    <p className="text-sm text-gray-200 leading-relaxed">{item.reason}</p>
                  </div>

                  {/* Data Points */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">Based on your data:</h4>
                    <div className="space-y-1">
                      {item.dataPoints.map((point, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-300">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 mt-4">
                    <button className="flex-1 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-xs rounded transition-colors">
                      Hide Similar Content
                    </button>
                    <button className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-xs rounded transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Analytics Summary */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4">Your Algorithm Profile Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-400 mb-1">73%</p>
                  <p className="text-sm text-gray-300">Content based on engagement patterns</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400 mb-1">41%</p>
                  <p className="text-sm text-gray-300">Recommendations use location data</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-400 mb-1">28%</p>
                  <p className="text-sm text-gray-300">Content designed to increase time spent</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-300 mb-1">Algorithm Insight</h4>
                    <p className="text-sm text-gray-300">
                      Your engagement patterns show high susceptibility to urgency-based content. Consider using mindful browsing techniques during peak vulnerability hours (8-10 PM).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Real-Time Activity Tracking
            </h2>

            {/* Current Session */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Current Session
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Platform:</span>
                    <span className="font-semibold">{activityTracking.currentSession.platform}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Time Spent:</span>
                    <span className="font-semibold text-yellow-400">{activityTracking.currentSession.timeSpent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Actions:</span>
                    <span className="font-semibold">{activityTracking.currentSession.actions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Algorithms Seen:</span>
                    <span className="font-semibold text-cyan-400">{activityTracking.currentSession.manipulationExposure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Last Analysis:</span>
                    <span className="font-semibold text-blue-400">{activityTracking.currentSession.lastAlert}</span>
                  </div>
                </div>
              </div>

              {/* Today's Stats */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4">Today's Activity</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Platforms Analyzed:</span>
                    <span className="font-semibold">{activityTracking.todayStats.platforms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Time:</span>
                    <span className="font-semibold text-blue-400">{activityTracking.todayStats.totalTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Insights Generated:</span>
                    <span className="font-semibold text-cyan-400">{activityTracking.todayStats.patternsBlocked}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Transparency Score:</span>
                    <span className="font-semibold text-purple-400">{activityTracking.todayStats.healthScore}/100</span>
                  </div>
                </div>
              </div>

              {/* Transparency Score Breakdown */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4">Transparency Score</h3>
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="w-24 h-24 rounded-full border-8 border-gray-700"></div>
                  <div 
                    className="absolute top-0 left-0 w-24 h-24 rounded-full border-8 border-cyan-500 border-t-transparent transform -rotate-90"
                    style={{ 
                      borderTopColor: 'transparent',
                      borderRightColor: activityTracking.todayStats.healthScore > 25 ? '#06b6d4' : 'transparent',
                      borderBottomColor: activityTracking.todayStats.healthScore > 50 ? '#06b6d4' : 'transparent',
                      borderLeftColor: activityTracking.todayStats.healthScore > 75 ? '#06b6d4' : 'transparent'
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-400">{activityTracking.todayStats.healthScore}</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-300 mb-2">Excellent transparency</p>
                  <p className="text-xs text-gray-400">Based on algorithm understanding</p>
                </div>
              </div>
            </div>

            {/* Recent Activity Timeline */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4">Recent Algorithm Analysis</h3>
              <div className="space-y-4">
                {activityTracking.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                    <div className={`w-3 h-3 rounded-full ${
                      activity.type === 'defense' ? 'bg-cyan-500' :
                      activity.type === 'alert' ? 'bg-blue-500' :
                      activity.type === 'vulnerability' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-white">{activity.action}</span>
                        <span className="text-xs text-gray-400">{activity.time}</span>
                      </div>
                      <span className="text-sm text-gray-300">{activity.platform}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold capitalize ${
                      activity.type === 'defense' ? 'bg-cyan-500/20 text-cyan-300' :
                      activity.type === 'alert' ? 'bg-blue-500/20 text-blue-300' :
                      activity.type === 'vulnerability' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {activity.type === 'defense' ? 'Analyzed' : 
                       activity.type === 'alert' ? 'Detected' : 
                       activity.type === 'vulnerability' ? 'Learning' : 'Wellness'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'limits' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Algorithm Controls & Preferences</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Platform Controls */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4">Platform Transparency Settings</h3>
                <div className="space-y-4">
                  {['YouTube', 'Facebook', 'Instagram', 'TikTok'].map((platform) => (
                    <div key={platform} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="font-medium text-white">{platform}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-300">Deep Analysis</span>
                        <div className="w-12 h-6 bg-cyan-600 rounded-full p-1 cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full transition-transform transform translate-x-6"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Preferences */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4">Content Analysis Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <span className="font-medium text-white">Real-time Explanations</span>
                      <p className="text-xs text-gray-400">Show why content appears instantly</p>
                    </div>
                    <div className="w-12 h-6 bg-cyan-600 rounded-full p-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full transition-transform transform translate-x-6"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <span className="font-medium text-white">Manipulation Alerts</span>
                      <p className="text-xs text-gray-400">Warn about persuasive content</p>
                    </div>
                    <div className="w-12 h-6 bg-cyan-600 rounded-full p-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full transition-transform transform translate-x-6"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <span className="font-medium text-white">Data Usage Insights</span>
                      <p className="text-xs text-gray-400">Show what data influences content</p>
                    </div>
                    <div className="w-12 h-6 bg-gray-600 rounded-full p-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'campaigns' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Collective Transparency Campaigns</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign, index) => (
                <CampaignCard key={index} campaign={campaign} />
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4">Global Impact This Month</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">847K</p>
                  <p className="text-sm text-gray-300">Algorithms analyzed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">23.4M</p>
                  <p className="text-sm text-gray-300">Transparency insights shared</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">156</p>
                  <p className="text-sm text-gray-300">Platforms made more transparent</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Algorithm Transparency Champions</h2>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="space-y-4">
                {leaderboard.map((user, index) => (
                  <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${
                    user.name === 'You' ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-white/5'
                  }`}>
                    <div className="flex items-center space-x-4">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        index < 3 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gray-600'
                      }`}>
                        {user.rank}
                      </span>
                      <span className="text-2xl">{user.badge}</span>
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">{user.score.toLocaleString()}</span>
                      <span className="text-sm text-gray-300">pts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'learn' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Algorithm Literacy Education</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Algorithm Basics', progress: 100, duration: '15 min', icon: '🤖' },
                { title: 'Content Recommendation Systems', progress: 75, duration: '20 min', icon: '🎯' },
                { title: 'Data Privacy & Algorithms', progress: 45, duration: '25 min', icon: '🛡' },
                { title: 'Bias in AI Systems', progress: 30, duration: '18 min', icon: '⚖' },
                { title: 'Transparency Rights', progress: 0, duration: '22 min', icon: '🔍' },
                { title: 'Digital Influence Tactics', progress: 0, duration: '30 min', icon: '🧠' }
              ].map((course, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{course.icon}</span>
                    <span className="text-sm text-gray-400">{course.duration}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{course.title}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: ${course.progress}% }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-300">{course.progress}% complete</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Live Algorithm Alerts</h2>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Real-time monitoring active</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Active Alerts</h3>
                {liveAlerts.filter(alert => alert.active).map(alert => (
                  <AlertItem key={alert.id} alert={alert} />
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Recent History</h3>
                {liveAlerts.filter(alert => !alert.active).map(alert => (
                  <AlertItem key={alert.id} alert={alert} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

