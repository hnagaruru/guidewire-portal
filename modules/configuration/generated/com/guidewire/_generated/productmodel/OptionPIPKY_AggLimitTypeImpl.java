package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_KY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPKY_AggLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPKY_AggLimitType> implements productmodel.OptionPIPKY_AggLimitType {
  public OptionPIPKY_AggLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_KY getCAPIP_KY() {
    return (productmodel.CAPIP_KY)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_KY getCoverage() {
    return (productmodel.CAPIP_KY)getClause();
  }
  
  
}