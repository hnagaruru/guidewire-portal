package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_MN.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPMN_MED_DEDUCTTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPMN_MED_DEDUCTType> implements productmodel.OptionPIPMN_MED_DEDUCTType {
  public OptionPIPMN_MED_DEDUCTTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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