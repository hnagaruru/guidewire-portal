package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_HI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPHI_MGDCARE_COPAY_DEDUCTTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPHI_MGDCARE_COPAY_DEDUCTType> implements productmodel.OptionPIPHI_MGDCARE_COPAY_DEDUCTType {
  public OptionPIPHI_MGDCARE_COPAY_DEDUCTTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_HI getCAPIP_HI() {
    return (productmodel.CAPIP_HI)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_HI getCoverage() {
    return (productmodel.CAPIP_HI)getClause();
  }
  
  
}