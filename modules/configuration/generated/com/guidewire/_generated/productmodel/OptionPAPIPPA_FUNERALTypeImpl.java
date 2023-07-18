package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_PA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPPA_FUNERALTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPPA_FUNERALType> implements productmodel.OptionPAPIPPA_FUNERALType {
  public OptionPAPIPPA_FUNERALTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_PA getCoverage() {
    return (productmodel.PAPIP_PA)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_PA getPAPIP_PA() {
    return (productmodel.PAPIP_PA)getClause();
  }
  
  
}