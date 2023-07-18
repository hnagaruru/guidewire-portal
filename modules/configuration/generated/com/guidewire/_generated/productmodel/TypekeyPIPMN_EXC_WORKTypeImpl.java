package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_MN.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyPIPMN_EXC_WORKTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.PIPWorkLossExclusion> implements productmodel.TypekeyPIPMN_EXC_WORKType {
  public TypekeyPIPMN_EXC_WORKTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_MN getCAPIP_MN() {
    return (productmodel.CAPIP_MN)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_MN getCoverage() {
    return (productmodel.CAPIP_MN)getClause();
  }
  
  
}