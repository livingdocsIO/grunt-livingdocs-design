guard 'less', :all_on_start => false, :all_after_change => false, :output => "public/css" do
  watch(%r{^designs/bootstrap/.*\.less$}) { "designs/bootstrap/bootstrap.less" }
  watch(%r{^designs/medium/.*\.less$}) { "designs/medium/medium.less" }
  watch(%r{^designs/upfrontIO/.*\.less$}) { "designs/upfrontIO/upfrontIO.less" }
  watch(%r{^designs/az/.*\.less$}) { "designs/az/az.less" }
  watch(%r{^designs/watson/.*\.less$}) { "designs/watson/watson.less" }
end

guard 'coffeescript', :all_on_start => false, :all_after_change => false, :output => 'public/js' do
  watch(%r{^designs/bootstrap/.*\.coffee$})
  watch(%r{^designs/upfrontIO/.*\.coffee$})
  watch(%r{^designs/az/.*\.coffee$})
  watch(%r{^designs/watson/.*\.coffee$})
end