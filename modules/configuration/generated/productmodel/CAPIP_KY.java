package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_KY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_KY extends entity.BAStateCov {
  protected CAPIP_KY()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_KY(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_KY");
  }
  
  public CAPIP_KY(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_KY");
  }
  
  public boolean getHasKYPIP_MotorcylceTerm() {
    return hasCovTerm("KYPIP_Motorcylce");
  }
  
  public boolean getHasPIPKYWEEKLYTerm() {
    return hasCovTerm("PIPKYWEEKLY");
  }
  
  public boolean getHasPIPKY_AggLimitTerm() {
    return hasCovTerm("PIPKY_AggLimit");
  }
  
  public boolean getHasPIPKY_FuneralTerm() {
    return hasCovTerm("PIPKY_Funeral");
  }
  
  public boolean getHasPIPKY_GuestONLYTerm() {
    return hasCovTerm("PIPKY_GuestONLY");
  }
  
  public productmodel.GenericKYPIP_MotorcylceType getKYPIP_MotorcylceTerm() {
    return (productmodel.GenericKYPIP_MotorcylceType)getCovTerm("KYPIP_Motorcylce");
  }
  
  public productmodel.OptionPIPKYWEEKLYType getPIPKYWEEKLYTerm() {
    return (productmodel.OptionPIPKYWEEKLYType)getCovTerm("PIPKYWEEKLY");
  }
  
  public productmodel.OptionPIPKY_AggLimitType getPIPKY_AggLimitTerm() {
    return (productmodel.OptionPIPKY_AggLimitType)getCovTerm("PIPKY_AggLimit");
  }
  
  public productmodel.OptionPIPKY_FuneralType getPIPKY_FuneralTerm() {
    return (productmodel.OptionPIPKY_FuneralType)getCovTerm("PIPKY_Funeral");
  }
  
  public productmodel.GenericPIPKY_GuestONLYType getPIPKY_GuestONLYTerm() {
    return (productmodel.GenericPIPKY_GuestONLYType)getCovTerm("PIPKY_GuestONLY");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_KYInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_KY>() {
      public productmodel.CAPIP_KY newEmptyInstance() {
        return new productmodel.CAPIP_KY();
      }
      
      
    });
  }
}