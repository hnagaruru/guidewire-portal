package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_TX.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPTX_LIMITTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPTX_LIMITType> implements productmodel.OptionPAPIPTX_LIMITType {
  public OptionPAPIPTX_LIMITTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_TX getCoverage() {
    return (productmodel.PAPIP_TX)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_TX getPAPIP_TX() {
    return (productmodel.PAPIP_TX)getClause();
  }
  
  
}