package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPValuablePapersCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPValPaperOnPremLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPValPaperOnPremLimType {
  public DirectBOPValPaperOnPremLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPValuablePapersCov getBOPValuablePapersCov() {
    return (productmodel.BOPValuablePapersCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPValuablePapersCov getCoverage() {
    return (productmodel.BOPValuablePapersCov)getClause();
  }
  
  
}