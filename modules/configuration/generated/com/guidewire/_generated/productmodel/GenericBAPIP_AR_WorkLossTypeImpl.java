package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CA_PIP_AR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBAPIP_AR_WorkLossTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericBAPIP_AR_WorkLossType {
  public GenericBAPIP_AR_WorkLossTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CA_PIP_AR getCA_PIP_AR() {
    return (productmodel.CA_PIP_AR)getClause();
  }
  
  @java.lang.Override
  public productmodel.CA_PIP_AR getCoverage() {
    return (productmodel.CA_PIP_AR)getClause();
  }
  
  
}