package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_DC.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIP_DC_WorkLossTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIP_DC_WorkLossType> implements productmodel.OptionPAPIP_DC_WorkLossType {
  public OptionPAPIP_DC_WorkLossTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_DC getCoverage() {
    return (productmodel.PAPIP_DC)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_DC getPAPIP_DC() {
    return (productmodel.PAPIP_DC)getClause();
  }
  
  
}