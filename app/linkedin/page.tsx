import NavItem from './NavItem'
import PostAction from './PostAction'
import ProfileStat from './ProfileStat'

import Image from 'next/image'
import { Bell, MessageSquare, Search, Home, Users, Briefcase, Grid, Share2, ThumbsUp, MessageCircle, Send, MoreHorizontal, Info, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

const posts = [
  {
    id: 1,
    author: 'Sarah Johnson',
    role: 'Senior Product Designer at Design Co',
    content: `🎨 Just wrapped up an amazing product design workshop with our team! 

We explored innovative solutions for our upcoming mobile app redesign. The energy and creativity in the room were incredible.

Key takeaways:
• User-first approach is crucial
• Simplicity wins over complexity
• Design systems save time
• Collaboration leads to better outcomes

#ProductDesign #UX #Innovation #Design`,
    timeAgo: '2h',
    likes: 842,
    comments: 123,
    shares: 45,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12'
  },
  {
    id: 2,
    author: 'Alex Chen',
    role: 'Tech Lead at InnovateX',
    content: `💡 Excited to share that our team just open-sourced our internal design system!

After months of hard work, we've created a comprehensive component library that's now available for the community.

Check out the repository: [link in comments]

#OpenSource #Frontend #Development #React`,
    timeAgo: '4h',
    likes: 1289,
    comments: 89,
    shares: 234,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3'
  }
]

const newsItems = [
  {
    id: 1,
    title: 'AI transforms workplace productivity',
    readers: 58642,
    timeAgo: '2h'
  },
  {
    id: 2,
    title: 'Remote work trends in 2024',
    readers: 42153,
    timeAgo: '3h'
  },
  {
    id: 3,
    title: 'Tech layoffs: Industry analysis',
    readers: 35891,
    timeAgo: '4h'
  },
  {
    id: 4,
    title: 'Startups raise record funding',
    readers: 28734,
    timeAgo: '5h'
  }
]

export default function LinkedIn() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">in</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-100 pl-10 pr-4 py-2 rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                <NavItem icon={<Home className="h-6 w-6" />} label="Home" active />
                <NavItem icon={<Users className="h-6 w-6" />} label="Network" />
                <NavItem icon={<Briefcase className="h-6 w-6" />} label="Jobs" />
                <NavItem icon={<MessageSquare className="h-6 w-6" />} label="Messaging" />
                <NavItem icon={<Bell className="h-6 w-6" />} label="Notifications" />
                <Separator orientation="vertical" className="h-8" />
                <ProfileDropdown />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <Card>
              <div className="relative">
                <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-lg" />
                <Avatar className="w-20 h-20 border-4 border-white absolute -bottom-10 left-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="pt-12 pb-4">
                <h2 className="text-xl font-semibold">James Parker</h2>
                <p className="text-sm text-gray-600 mt-1">Senior Software Engineer | React | Node.js | AWS</p>
                <Separator className="my-4" />
                <div className="space-y-3">
                  <ProfileStat label="Profile views" value="1,482" change="+27%" />
                  <ProfileStat label="Post impressions" value="8,936" change="+124%" />
                  <ProfileStat label="Search appearances" value="642" change="+12%" />
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View detailed analytics
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Feed */}
          <div className="md:col-span-2 space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <button className="flex-grow text-left px-4 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors text-gray-500">
                    Start a post
                  </button>
                </div>
                <div className="flex justify-between mt-4">
                  <PostAction icon={<Image className="text-blue-600" />} label="Media" />
                  <PostAction icon={<Calendar className="text-amber-600" />} label="Event" />
                  <PostAction icon={<FileText className="text-rose-600" />} label="Write article" />
                </div>
              </CardContent>
            </Card>

            {posts.map(post => (
              <Card key={post.id} className="overflow-hidden">
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{post.author}</h3>
                        <p className="text-sm text-gray-600">{post.role}</p>
                        <p className="text-sm text-gray-500">{post.timeAgo}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <p className="whitespace-pre-line">{post.content}</p>
                  {post.image && (
                    <div className="mt-4 relative h-96">
                      <Image
                        src={post.image}
                        alt="Post image"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                    <span>{post.likes.toLocaleString()} likes</span>
                    <span>{post.comments} comments • {post.shares} shares</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex justify-between">
                    <PostAction icon={<ThumbsUp />} label="Like" />
                    <PostAction icon={<MessageCircle />} label="Comment" />
                    <PostAction icon={<Share2 />} label="Share" />
                    <PostAction icon={<Send />} label="Send" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* News Section */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">LinkedIn News</h2>
                  <Button variant="ghost" size="icon">
                    <Info className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {newsItems.map((item) => (
                    <li key={item.id}>
                      <a href="#" className="group">
                        <h3 className="font-semibold group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.readers.toLocaleString()} readers • {item.timeAgo} ago
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full mt-4">
                  Show more
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <h2 className="text-lg font-semibold">Add to your feed</h2>
              </CardHeader>
              <CardContent>
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center space-x-3 mb-4">
                    <Avatar>
                      <AvatarImage src={`https://images.unsplash.com/photo-${1500000000000 + item}`} />
                      <AvatarFallback>U{item}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <h3 className="font-semibold">Company {item}</h3>
                      <p className="text-sm text-gray-600">Company • Technology</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        + Follow
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
