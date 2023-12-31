# TypeScript AST 수정: 직접 구현하기 with bun

이 레포지토리에서는 TypeScript의 Abstract Syntax Tree (AST)를 직접 조작하여 코드를 수정하는 방법에 대해 학습합니다.

## 배경

- **AST 이해:** 코드는 결국 텍스트입니다. 이 텍스트를 기계가 이해하고 처리할 수 있도록 구조화된 표현으로 변환하는 것이 AST입니다. TypeScript도 자체적인 AST를 가지고 있어, 이를 활용하면 코드의 구조를 분석하고 수정할 수 있습니다.

- **코드 수정의 필요성:** 때로는 많은 양의 코드에 일괄적인 변경을 가해야 할 때가 있습니다. 이럴 때, 직접 코드를 하나하나 수정하기보다는 AST를 활용해 프로그래매틱하게 코드를 수정하는 것이 효율적입니다.

## 학습 내용

- **TypeScript Compiler API 활용:** TypeScript는 Compiler API를 제공합니다. 이를 통해 TypeScript 코드의 AST를 생성하고, 이 AST를 조작하고, 다시 TypeScript 코드로 변환하는 과정을 학습했습니다.

- **AST 방문 및 수정:** AST는 노드의 트리 구조로 되어 있습니다. 특정 종류의 노드를 찾기 위해 이 트리를 방문하고, 해당 노드를 수정하는 방법을 익혔습니다.

- **실제 구현:** TsMorpher 클래스를 통해 메서드의 이름을 변경하는 간단한 예제를 구현해 보았습니다. 이를 통해 AST 조작의 실제적인 활용 방법을 이해했습니다.

## 후기

2시간 동안 TypeScript의 AST를 조작하는 방법을 직접 구현하며 깊은 이해를 얻을 수 있었습니다. 코드의 구조와 동작 원리를 더욱 명확하게 알게 되었습니다.
