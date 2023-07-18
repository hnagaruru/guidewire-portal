package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLContractualLiabRR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGLContractualLiabRRDescriptionTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericGLContractualLiabRRDescriptionType {
  public GenericGLContractualLiabRRDescriptionTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLContractualLiabRR getCoverage() {
    return (productmodel.GLContractualLiabRR)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLContractualLiabRR getGLContractualLiabRR() {
    return (productmodel.GLContractualLiabRR)getClause();
  }
  
  
}