package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_NJ.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPNJ_MEDLIMITTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPNJ_MEDLIMITType> implements productmodel.OptionPAPIPNJ_MEDLIMITType {
  public OptionPAPIPNJ_MEDLIMITTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_NJ getCoverage() {
    return (productmodel.PAPIP_NJ)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_NJ getPAPIP_NJ() {
    return (productmodel.PAPIP_NJ)getClause();
  }
  
  
}