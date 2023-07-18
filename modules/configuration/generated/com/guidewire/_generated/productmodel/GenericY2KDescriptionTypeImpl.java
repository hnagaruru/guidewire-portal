package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/Y2KLimitedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericY2KDescriptionTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericY2KDescriptionType {
  public GenericY2KDescriptionTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
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