package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_KY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPAPIPKY_GuestONLYTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPAPIPKY_GuestONLYType {
  public GenericPAPIPKY_GuestONLYTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_KY getCoverage() {
    return (productmodel.PAPIP_KY)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_KY getPAPIP_KY() {
    return (productmodel.PAPIP_KY)getClause();
  }
  
  
}