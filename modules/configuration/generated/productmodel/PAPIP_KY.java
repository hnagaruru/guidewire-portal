package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_KY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_KY extends entity.PersonalAutoCov {
  protected PAPIP_KY()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_KY(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_KY");
  }
  
  public PAPIP_KY(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_KY");
  }
  
  public boolean getHasPAPIPKYWEEKLYTerm() {
    return hasCovTerm("PAPIPKYWEEKLY");
  }
  
  public boolean getHasPAPIPKY_AggLimitTerm() {
    return hasCovTerm("PAPIPKY_AggLimit");
  }
  
  public boolean getHasPAPIPKY_FuneralTerm() {
    return hasCovTerm("PAPIPKY_Funeral");
  }
  
  public boolean getHasPAPIPKY_GuestONLYTerm() {
    return hasCovTerm("PAPIPKY_GuestONLY");
  }
  
  public boolean getHasPAPIPKY_MotorcycleTerm() {
    return hasCovTerm("PAPIPKY_Motorcycle");
  }
  
  public productmodel.OptionPAPIPKYWEEKLYType getPAPIPKYWEEKLYTerm() {
    return (productmodel.OptionPAPIPKYWEEKLYType)getCovTerm("PAPIPKYWEEKLY");
  }
  
  public productmodel.OptionPAPIPKY_AggLimitType getPAPIPKY_AggLimitTerm() {
    return (productmodel.OptionPAPIPKY_AggLimitType)getCovTerm("PAPIPKY_AggLimit");
  }
  
  public productmodel.OptionPAPIPKY_FuneralType getPAPIPKY_FuneralTerm() {
    return (productmodel.OptionPAPIPKY_FuneralType)getCovTerm("PAPIPKY_Funeral");
  }
  
  public productmodel.GenericPAPIPKY_GuestONLYType getPAPIPKY_GuestONLYTerm() {
    return (productmodel.GenericPAPIPKY_GuestONLYType)getCovTerm("PAPIPKY_GuestONLY");
  }
  
  public productmodel.GenericPAPIPKY_MotorcycleType getPAPIPKY_MotorcycleTerm() {
    return (productmodel.GenericPAPIPKY_MotorcycleType)getCovTerm("PAPIPKY_Motorcycle");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_KYInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_KY>() {
      public productmodel.PAPIP_KY newEmptyInstance() {
        return new productmodel.PAPIP_KY();
      }
      
      
    });
  }
}