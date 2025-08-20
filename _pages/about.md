---
permalink: /
title: "Academic Pages는 학술 개인 웹사이트를 위한 GitHub Pages 템플릿입니다"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

이 페이지는 [Academic Pages 템플릿](https://github.com/academicpages/academicpages.github.io)으로 구동되고 GitHub Pages에서 호스팅되는 웹사이트의 첫 페이지입니다. [GitHub Pages](https://pages.github.com)는 GitHub 리포지토리에 저장된 코드와 데이터로 웹사이트를 구축하고 호스팅하는 무료 서비스로, 리포지토리에 새 커밋이 만들어지면 자동으로 업데이트됩니다. 이 템플릿은 Michael Rose가 만든 [Minimal Mistakes Jekyll 테마](https://mmistakes.github.io/minimal-mistakes/)에서 파생되었으며, 학자들이 보유한 출판물, 강연, 강의, 포트폴리오, 블로그 게시물 및 동적으로 생성된 CV와 같은 콘텐츠를 지원하도록 확장되었습니다. 공교롭게도 이러한 동일한 기능 덕분에 전문적인 템플릿을 선보여야 하는 모든 사람에게 훌륭한 템플릿이 됩니다!

 지금 바로 [이 템플릿](https://github.com/academicpages/academicpages.github.io)을 포크하고, 구성 및 마크다운 파일을 수정하고, 자신만의 PDF 및 기타 콘텐츠를 추가하고, 광고 없이 무료로 자신만의 사이트를 가질 수 있습니다!

데이터 기반 개인 웹사이트
======
다른 많은 Jekyll 기반 GitHub Pages 템플릿과 마찬가지로 Academic Pages는 웹사이트의 콘텐츠를 형식과 분리합니다. 웹사이트의 콘텐츠 및 메타데이터는 구조화된 마크다운 파일에 있고, 다른 다양한 파일은 해당 콘텐츠 및 메타데이터를 HTML 페이지로 변환하는 방법을 지정하는 테마를 구성합니다. 이러한 다양한 마크다운(.md), YAML(.yml), HTML 및 CSS 파일을 공개 GitHub 리포지토리에 보관합니다. 리포지토리에 업데이트를 커밋하고 푸시할 때마다 [GitHub Pages](https://pages.github.com/) 서비스는 이러한 파일을 기반으로 정적 HTML 페이지를 생성하며, 이 페이지는 GitHub 서버에서 무료로 호스팅됩니다.

동적 콘텐츠 관리 시스템(예: Wordpress)의 많은 기능을 이러한 방식으로 달성할 수 있으며, 계산 리소스를 일부만 사용하고 해킹 및 DDoS 공격에 대한 취약성이 훨씬 적습니다. 또한 사이트 콘텐츠를 건드리지 않고도 원하는 대로 테마를 수정할 수 있습니다. Jekyll/HTML/CSS에서 복구할 수 없을 정도로 무언가를 망가뜨린 지점에 도달하더라도 강연, 출판물 등을 설명하는 마크다운 파일은 안전합니다. 변경 사항을 롤백하거나 리포지토리를 삭제하고 다시 시작할 수도 있습니다. 마크다운 파일을 저장해야 합니다! 또한 [이 스크립트](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb)와 같이 사이트의 구조화된 데이터를 처리하는 스크립트를 작성할 수도 있습니다. 이 스크립트는 강연에 대한 페이지의 메타데이터를 분석하여 [강연한 모든 위치의 지도](https://academicpages.github.io/talkmap.html)를 표시합니다.

더 고급 기능이 필요한 사용자를 위해 템플릿은 다음과 같은 인기 있는 도구도 지원합니다.
- [MathJax](https://www.mathjax.org/) for mathematical equations
- [Mermaid](https://mermaid.js.org/) for diagraming
- [Plotly](https://plotly.com/javascript/) for plotting

시작하기
======
1. GitHub 계정이 없으면 등록하고 이메일을 확인합니다(필수!)
1. 오른쪽 상단의 "이 템플릿 사용" 버튼을 클릭하여 [이 템플릿](https://github.com/academicpages/academicpages.github.io)을 포크합니다. 
1. 리포지토리의 설정("코드"로 시작하는 탭의 가장 오른쪽 항목, "Unwatch" 아래에 있어야 함)으로 이동합니다. 리포지토리 이름을 "[사용자 이름].github.io"로 바꾸면 웹사이트의 URL이 됩니다.
1. 사이트 전체 구성을 설정하고 콘텐츠 및 메타데이터를 만듭니다(아래 참조 -- 사용자 이름이 "getorg-testacct"인 사용자를 위해 [예제 사이트](https://getorg-testacct.github.io)를 설정하기 위해 변경된 파일을 보여주는 [이 차이점 집합](http://archive.is/3TPas)도 참조)
1. PDF, .zip 파일 등과 같은 모든 파일을 files/ 디렉토리에 업로드합니다. https://[사용자 이름].github.io/files/example.pdf에 나타납니다.  
1. 리포지토리 설정의 "GitHub Pages" 섹션으로 이동하여 상태를 확인합니다.

사이트 전체 구성
------
사이트의 기본 구성 파일은 [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml)의 기본 디렉토리에 있으며, 사이드바의 콘텐츠 및 기타 사이트 전체 기능을 정의합니다. 기본 변수를 자신과 사이트의 github 리포지토리에 대한 변수로 바꿔야 합니다. 상단 메뉴의 구성 파일은 [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml)에 있습니다. 예를 들어 포트폴리오나 블로그 게시물이 없는 경우 해당 navigation.yml 파일에서 해당 항목을 제거하여 헤더에서 제거할 수 있습니다. 

콘텐츠 및 메타데이터 만들기
------
사이트 콘텐츠의 경우 각 콘텐츠 유형에 대해 하나의 마크다운 파일이 있으며, _publications, _talks, _posts, _teaching 또는 _pages와 같은 디렉토리에 저장됩니다. 예를 들어 각 강연은 [_talks 디렉토리](https://github.com/academicpages/academicpages.github.io/tree/master/_talks)의 마크다운 파일입니다. 각 마크다운 파일의 맨 위에는 강연에 대한 YAML의 구조화된 데이터가 있으며, 테마는 이를 구문 분석하여 멋진 작업을 많이 수행합니다. 강연에 대한 동일한 구조화된 데이터는 [강연 페이지](https://academicpages.github.io/talks)의 강연 목록, 특정 강연에 대한 각 [개별 페이지](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**마크다운 생성기**

이 리포지토리에는 강연이나 발표에 대한 구조화된 데이터가 포함된 CSV를 Academic Pages 템플릿에 맞게 올바르게 포맷될 개별 마크다운 파일로 변환하는 [Jupyter 노트북 세트](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
)가 포함되어 있습니다. 해당 디렉토리의 샘플 CSV는 제가 stuartgeiger.com에서 제 개인 웹사이트를 만드는 데 사용한 것입니다. 제 일반적인 작업 흐름은 출판물과 강연의 스프레드시트를 유지한 다음 이 노트북의 코드를 실행하여 마크다운 파일을 생성한 다음 GitHub 리포지토리에 커밋하고 푸시하는 것입니다.

사이트의 GitHub 리포지토리 편집 방법
------
많은 사람들이 git 클라이언트를 사용하여 로컬 컴퓨터에 파일을 만든 다음 GitHub 서버로 푸시합니다. git에 익숙하지 않은 경우 github.com 인터페이스에서 직접 이러한 구성 및 마크다운 파일을 직접 편집할 수 있습니다. 파일(예: [이 파일](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md))로 이동하여 콘텐츠 미리보기의 오른쪽 상단에 있는 연필 아이콘("Raw | Blame | History" 버튼의 오른쪽에 있음)을 클릭합니다. 연필 아이콘 오른쪽에 있는 휴지통 아이콘을 클릭하여 파일을 삭제할 수 있습니다. 디렉토리로 이동하여 "새 파일 만들기" 또는 "파일 업로드" 버튼을 클릭하여 새 파일을 만들거나 파일을 업로드할 수도 있습니다. 

예: 강연을 위한 마크다운 파일 편집
![Editing a Markdown file for a talk](/images/editing-talk.png)

더 많은 정보
------
Academic Pages 구성에 대한 자세한 내용은 [가이드](https://academicpages.github.io/markdown/), [성장하는 위키](https://github.com/academicpages/academicpages.github.io/wiki)에서 찾을 수 있으며, 언제든지 [GitHub에서 질문](https://github.com/academicpages/academicpages.github.io/discussions)할 수 있습니다. [Minimal Mistakes 테마 가이드](https://mmistakes.github.io/minimal-mistakes/docs/configuration/)(이 테마가 파생된 테마)도 도움이 될 수 있습니다.
