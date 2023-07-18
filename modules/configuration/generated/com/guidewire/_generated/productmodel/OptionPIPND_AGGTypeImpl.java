package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_ND.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPND_AGGTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPND_AGGType> implements productmodel.OptionPIPND_AGGType {
  public OptionPIPND_AGGTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_ND getCAPIP_ND() {
    return (productmodel.CAPIP_ND)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_ND getCoverage() {
    return (productmodel.CAPIP_ND)getClause();
  }
  
  
}