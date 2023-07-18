package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_FL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionCAPIP_FL_LIMITTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionCAPIP_FL_LIMITType> implements productmodel.OptionCAPIP_FL_LIMITType {
  public OptionCAPIP_FL_LIMITTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_FL getCAPIP_FL() {
    return (productmodel.CAPIP_FL)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_FL getCoverage() {
    return (productmodel.CAPIP_FL)getClause();
  }
  
  
}