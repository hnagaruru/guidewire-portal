package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_DE.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyPIP_DE_Deduct_WhoAppliesTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.PIPHousehold> implements productmodel.TypekeyPIP_DE_Deduct_WhoAppliesType {
  public TypekeyPIP_DE_Deduct_WhoAppliesTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_DE getCAPIP_DE() {
    return (productmodel.CAPIP_DE)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_DE getCoverage() {
    return (productmodel.CAPIP_DE)getClause();
  }
  
  
}