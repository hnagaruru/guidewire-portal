package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MN.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPAPIPMN_CYCLETypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPAPIPMN_CYCLEType {
  public GenericPAPIPMN_CYCLETypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MN getCoverage() {
    return (productmodel.PAPIP_MN)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MN getPAPIP_MN() {
    return (productmodel.PAPIP_MN)getClause();
  }
  
  
}