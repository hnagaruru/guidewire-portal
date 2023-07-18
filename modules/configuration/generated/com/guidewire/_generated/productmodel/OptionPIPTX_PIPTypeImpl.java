package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_TX.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPTX_PIPTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPTX_PIPType> implements productmodel.OptionPIPTX_PIPType {
  public OptionPIPTX_PIPTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_TX getCAPIP_TX() {
    return (productmodel.CAPIP_TX)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_TX getCoverage() {
    return (productmodel.CAPIP_TX)getClause();
  }
  
  
}