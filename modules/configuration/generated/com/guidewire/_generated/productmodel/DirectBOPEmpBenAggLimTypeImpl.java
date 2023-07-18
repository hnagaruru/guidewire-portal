package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPEmpBenefits.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPEmpBenAggLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPEmpBenAggLimType {
  public DirectBOPEmpBenAggLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPEmpBenefits getBOPEmpBenefits() {
    return (productmodel.BOPEmpBenefits)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPEmpBenefits getCoverage() {
    return (productmodel.BOPEmpBenefits)getClause();
  }
  
  
}