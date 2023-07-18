package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLEmpBenefitsLiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGLEmpBenefitsLiabilityCovRetroactiveDateTypeImpl extends com.guidewire.pc.api.domain.covterm.DateTimeCovTermInternal implements productmodel.GenericGLEmpBenefitsLiabilityCovRetroactiveDateType {
  public GenericGLEmpBenefitsLiabilityCovRetroactiveDateTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLEmpBenefitsLiabilityCov getCoverage() {
    return (productmodel.GLEmpBenefitsLiabilityCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLEmpBenefitsLiabilityCov getGLEmpBenefitsLiabilityCov() {
    return (productmodel.GLEmpBenefitsLiabilityCov)getClause();
  }
  
  
}