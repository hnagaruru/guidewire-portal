package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_FL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_FL extends entity.PersonalAutoCov {
  protected PAPIP_FL()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_FL(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_FL");
  }
  
  public PAPIP_FL(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_FL");
  }
  
  public boolean getHasPAPIP_FL_ApplyDeductibleTerm() {
    return hasCovTerm("PAPIP_FL_ApplyDeductible");
  }
  
  public boolean getHasPAPIP_FL_DeductibleTerm() {
    return hasCovTerm("PAPIP_FL_Deductible");
  }
  
  public boolean getHasPAPIP_FL_LIMITTerm() {
    return hasCovTerm("PAPIP_FL_LIMIT");
  }
  
  public boolean getHasPAPIP_FL_WorkWaiverTerm() {
    return hasCovTerm("PAPIP_FL_WorkWaiver");
  }
  
  public productmodel.TypekeyPAPIP_FL_ApplyDeductibleType getPAPIP_FL_ApplyDeductibleTerm() {
    return (productmodel.TypekeyPAPIP_FL_ApplyDeductibleType)getCovTerm("PAPIP_FL_ApplyDeductible");
  }
  
  public productmodel.OptionPAPIP_FL_DeductibleType getPAPIP_FL_DeductibleTerm() {
    return (productmodel.OptionPAPIP_FL_DeductibleType)getCovTerm("PAPIP_FL_Deductible");
  }
  
  public productmodel.OptionPAPIP_FL_LIMITType getPAPIP_FL_LIMITTerm() {
    return (productmodel.OptionPAPIP_FL_LIMITType)getCovTerm("PAPIP_FL_LIMIT");
  }
  
  public productmodel.TypekeyPAPIP_FL_WorkWaiverType getPAPIP_FL_WorkWaiverTerm() {
    return (productmodel.TypekeyPAPIP_FL_WorkWaiverType)getCovTerm("PAPIP_FL_WorkWaiver");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_FLInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_FL>() {
      public productmodel.PAPIP_FL newEmptyInstance() {
        return new productmodel.PAPIP_FL();
      }
      
      
    });
  }
}