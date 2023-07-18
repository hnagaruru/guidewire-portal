package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PALossOfUseCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPARentalLossOfUseLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPARentalLossOfUseLimitType> implements productmodel.OptionPARentalLossOfUseLimitType {
  public OptionPARentalLossOfUseLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PALossOfUseCov getCoverage() {
    return (productmodel.PALossOfUseCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PALossOfUseCov getPALossOfUseCov() {
    return (productmodel.PALossOfUseCov)getClause();
  }
  
  
}