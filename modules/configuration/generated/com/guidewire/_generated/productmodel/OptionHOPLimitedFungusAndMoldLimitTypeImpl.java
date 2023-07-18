package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPLimitedFungusAndMold.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPLimitedFungusAndMoldLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPLimitedFungusAndMoldLimitType> implements productmodel.OptionHOPLimitedFungusAndMoldLimitType {
  public OptionHOPLimitedFungusAndMoldLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPLimitedFungusAndMold getCoverage() {
    return (productmodel.HOPLimitedFungusAndMold)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPLimitedFungusAndMold getHOPLimitedFungusAndMold() {
    return (productmodel.HOPLimitedFungusAndMold)getClause();
  }
  
  
}