package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MN.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyPAPIPMN_EXC_WORKTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.PIPWorkLossExclusion> implements productmodel.TypekeyPAPIPMN_EXC_WORKType {
  public TypekeyPAPIPMN_EXC_WORKTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
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