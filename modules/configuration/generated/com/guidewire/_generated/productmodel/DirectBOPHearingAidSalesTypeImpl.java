package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPHearingAidCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPHearingAidSalesTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPHearingAidSalesType {
  public DirectBOPHearingAidSalesTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPHearingAidCov getBOPHearingAidCov() {
    return (productmodel.BOPHearingAidCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPHearingAidCov getCoverage() {
    return (productmodel.BOPHearingAidCov)getClause();
  }
  
  
}