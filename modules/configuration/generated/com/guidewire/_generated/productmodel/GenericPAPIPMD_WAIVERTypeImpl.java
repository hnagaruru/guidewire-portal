package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MD.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPAPIPMD_WAIVERTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPAPIPMD_WAIVERType {
  public GenericPAPIPMD_WAIVERTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MD getCoverage() {
    return (productmodel.PAPIP_MD)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MD getPAPIP_MD() {
    return (productmodel.PAPIP_MD)getClause();
  }
  
  
}