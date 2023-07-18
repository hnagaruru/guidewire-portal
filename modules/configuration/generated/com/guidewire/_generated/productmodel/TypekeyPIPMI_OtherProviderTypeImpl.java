package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_MI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyPIPMI_OtherProviderTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.CoordinatePIP> implements productmodel.TypekeyPIPMI_OtherProviderType {
  public TypekeyPIPMI_OtherProviderTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_MI getCAPIP_MI() {
    return (productmodel.CAPIP_MI)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_MI getCoverage() {
    return (productmodel.CAPIP_MI)getClause();
  }
  
  
}