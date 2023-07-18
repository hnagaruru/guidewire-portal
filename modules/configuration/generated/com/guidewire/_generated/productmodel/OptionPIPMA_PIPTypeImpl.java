package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_MA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPMA_PIPTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPMA_PIPType> implements productmodel.OptionPIPMA_PIPType {
  public OptionPIPMA_PIPTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_MA getCAPIP_MA() {
    return (productmodel.CAPIP_MA)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_MA getCoverage() {
    return (productmodel.CAPIP_MA)getClause();
  }
  
  
}