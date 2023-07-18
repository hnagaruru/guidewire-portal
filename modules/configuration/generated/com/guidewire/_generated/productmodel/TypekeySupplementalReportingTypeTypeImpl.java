package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ClaimsMadeSupplementalRptng.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeySupplementalReportingTypeTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.TypeOfSupplementalRpting> implements productmodel.TypekeySupplementalReportingTypeType {
  public TypekeySupplementalReportingTypeTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ClaimsMadeSupplementalRptng getClaimsMadeSupplementalRptng() {
    return (productmodel.ClaimsMadeSupplementalRptng)getClause();
  }
  
  @java.lang.Override
  public productmodel.ClaimsMadeSupplementalRptng getCondition() {
    return (productmodel.ClaimsMadeSupplementalRptng)getClause();
  }
  
  
}