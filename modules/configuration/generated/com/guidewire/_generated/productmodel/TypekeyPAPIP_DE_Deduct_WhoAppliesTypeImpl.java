package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_DE.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyPAPIP_DE_Deduct_WhoAppliesTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.PIPHousehold> implements productmodel.TypekeyPAPIP_DE_Deduct_WhoAppliesType {
  public TypekeyPAPIP_DE_Deduct_WhoAppliesTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_DE getCoverage() {
    return (productmodel.PAPIP_DE)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_DE getPAPIP_DE() {
    return (productmodel.PAPIP_DE)getClause();
  }
  
  
}