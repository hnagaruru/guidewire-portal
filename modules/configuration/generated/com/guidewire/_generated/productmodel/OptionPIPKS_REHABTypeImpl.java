package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_KS.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPKS_REHABTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPKS_REHABType> implements productmodel.OptionPIPKS_REHABType {
  public OptionPIPKS_REHABTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_KS getCAPIP_KS() {
    return (productmodel.CAPIP_KS)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_KS getCoverage() {
    return (productmodel.CAPIP_KS)getClause();
  }
  
  
}