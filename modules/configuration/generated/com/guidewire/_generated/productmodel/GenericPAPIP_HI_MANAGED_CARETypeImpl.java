package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_HI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPAPIP_HI_MANAGED_CARETypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPAPIP_HI_MANAGED_CAREType {
  public GenericPAPIP_HI_MANAGED_CARETypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_HI getCoverage() {
    return (productmodel.PAPIP_HI)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_HI getPAPIP_HI() {
    return (productmodel.PAPIP_HI)getClause();
  }
  
  
}