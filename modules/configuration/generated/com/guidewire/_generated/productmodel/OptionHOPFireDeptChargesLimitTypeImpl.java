package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPFireDeptCharges.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPFireDeptChargesLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPFireDeptChargesLimitType> implements productmodel.OptionHOPFireDeptChargesLimitType {
  public OptionHOPFireDeptChargesLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPFireDeptCharges getCoverage() {
    return (productmodel.HOPFireDeptCharges)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPFireDeptCharges getHOPFireDeptCharges() {
    return (productmodel.HOPFireDeptCharges)getClause();
  }
  
  
}