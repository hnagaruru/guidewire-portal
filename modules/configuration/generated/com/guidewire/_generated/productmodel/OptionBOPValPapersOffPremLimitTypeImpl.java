package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPValuablePapersCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPValPapersOffPremLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPValPapersOffPremLimitType> implements productmodel.OptionBOPValPapersOffPremLimitType {
  public OptionBOPValPapersOffPremLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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