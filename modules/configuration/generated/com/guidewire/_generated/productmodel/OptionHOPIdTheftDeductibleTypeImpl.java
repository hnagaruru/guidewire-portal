package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPIdTheft.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPIdTheftDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPIdTheftDeductibleType> implements productmodel.OptionHOPIdTheftDeductibleType {
  public OptionHOPIdTheftDeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPIdTheft getCoverage() {
    return (productmodel.HOPIdTheft)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPIdTheft getHOPIdTheft() {
    return (productmodel.HOPIdTheft)getClause();
  }
  
  
}