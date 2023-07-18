package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_NJ.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyPAPIPNJ_MEDDEDUCTappliestoTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.PIPHousehold> implements productmodel.TypekeyPAPIPNJ_MEDDEDUCTappliestoType {
  public TypekeyPAPIPNJ_MEDDEDUCTappliestoTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
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