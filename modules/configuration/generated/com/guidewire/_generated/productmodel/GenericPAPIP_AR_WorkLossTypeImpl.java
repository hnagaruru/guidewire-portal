package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_AR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPAPIP_AR_WorkLossTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPAPIP_AR_WorkLossType {
  public GenericPAPIP_AR_WorkLossTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_AR getCoverage() {
    return (productmodel.PAPIP_AR)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_AR getPAPIP_AR() {
    return (productmodel.PAPIP_AR)getClause();
  }
  
  
}