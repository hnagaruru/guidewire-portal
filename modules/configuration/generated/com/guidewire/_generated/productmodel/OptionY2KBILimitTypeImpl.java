package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/Y2KLimitedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionY2KBILimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionY2KBILimitType> implements productmodel.OptionY2KBILimitType {
  public OptionY2KBILimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.Y2KLimitedCov getCoverage() {
    return (productmodel.Y2KLimitedCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.Y2KLimitedCov getY2KLimitedCov() {
    return (productmodel.Y2KLimitedCov)getClause();
  }
  
  
}