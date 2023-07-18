package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_FL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIP_FL_LIMITTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIP_FL_LIMITType> implements productmodel.OptionPAPIP_FL_LIMITType {
  public OptionPAPIP_FL_LIMITTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_FL getCoverage() {
    return (productmodel.PAPIP_FL)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_FL getPAPIP_FL() {
    return (productmodel.PAPIP_FL)getClause();
  }
  
  
}