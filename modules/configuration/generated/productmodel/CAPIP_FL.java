package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_FL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_FL extends entity.BAStateCov {
  protected CAPIP_FL()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_FL(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_FL");
  }
  
  public CAPIP_FL(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_FL");
  }
  
  public productmodel.TypekeyCAPIP_FL_ApplyDeductibleType getCAPIP_FL_ApplyDeductibleTerm() {
    return (productmodel.TypekeyCAPIP_FL_ApplyDeductibleType)getCovTerm("CAPIP_FL_ApplyDeductible");
  }
  
  public productmodel.OptionCAPIP_FL_DeductibleType getCAPIP_FL_DeductibleTerm() {
    return (productmodel.OptionCAPIP_FL_DeductibleType)getCovTerm("CAPIP_FL_Deductible");
  }
  
  public productmodel.OptionCAPIP_FL_LIMITType getCAPIP_FL_LIMITTerm() {
    return (productmodel.OptionCAPIP_FL_LIMITType)getCovTerm("CAPIP_FL_LIMIT");
  }
  
  public productmodel.TypekeyCAPIP_FL_WorkWaiverType getCAPIP_FL_WorkWaiverTerm() {
    return (productmodel.TypekeyCAPIP_FL_WorkWaiverType)getCovTerm("CAPIP_FL_WorkWaiver");
  }
  
  public boolean getHasCAPIP_FL_ApplyDeductibleTerm() {
    return hasCovTerm("CAPIP_FL_ApplyDeductible");
  }
  
  public boolean getHasCAPIP_FL_DeductibleTerm() {
    return hasCovTerm("CAPIP_FL_Deductible");
  }
  
  public boolean getHasCAPIP_FL_LIMITTerm() {
    return hasCovTerm("CAPIP_FL_LIMIT");
  }
  
  public boolean getHasCAPIP_FL_WorkWaiverTerm() {
    return hasCovTerm("CAPIP_FL_WorkWaiver");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_FLInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_FL>() {
      public productmodel.CAPIP_FL newEmptyInstance() {
        return new productmodel.CAPIP_FL();
      }
      
      
    });
  }
}