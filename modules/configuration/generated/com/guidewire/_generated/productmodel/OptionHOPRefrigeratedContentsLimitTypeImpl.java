package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPRefrigeratedContents.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPRefrigeratedContentsLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPRefrigeratedContentsLimitType> implements productmodel.OptionHOPRefrigeratedContentsLimitType {
  public OptionHOPRefrigeratedContentsLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPRefrigeratedContents getCoverage() {
    return (productmodel.HOPRefrigeratedContents)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPRefrigeratedContents getHOPRefrigeratedContents() {
    return (productmodel.HOPRefrigeratedContents)getClause();
  }
  
  
}