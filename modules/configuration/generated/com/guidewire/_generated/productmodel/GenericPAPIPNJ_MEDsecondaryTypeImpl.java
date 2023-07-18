package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_NJ.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPAPIPNJ_MEDsecondaryTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPAPIPNJ_MEDsecondaryType {
  public GenericPAPIPNJ_MEDsecondaryTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_NJ getCoverage() {
    return (productmodel.PAPIP_NJ)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_NJ getPAPIP_NJ() {
    return (productmodel.PAPIP_NJ)getClause();
  }
  
  
}