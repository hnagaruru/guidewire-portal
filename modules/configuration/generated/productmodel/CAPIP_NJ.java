package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_NJ.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_NJ extends entity.BAStateCov {
  protected CAPIP_NJ()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_NJ(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_NJ");
  }
  
  public CAPIP_NJ(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_NJ");
  }
  
  public boolean getHasPIPNJ_MEDDEDUCTTerm() {
    return hasCovTerm("PIPNJ_MEDDEDUCT");
  }
  
  public boolean getHasPIPNJ_MEDDEDUCTappliestoTerm() {
    return hasCovTerm("PIPNJ_MEDDEDUCTappliesto");
  }
  
  public boolean getHasPIPNJ_MEDLIMITTerm() {
    return hasCovTerm("PIPNJ_MEDLIMIT");
  }
  
  public boolean getHasPIPNJ_MEDONLYTerm() {
    return hasCovTerm("PIPNJ_MEDONLY");
  }
  
  public boolean getHasPIPNJ_MED_COPAYTerm() {
    return hasCovTerm("PIPNJ_MED_COPAY");
  }
  
  public boolean getHasPIPNJ_MEDsecondaryTerm() {
    return hasCovTerm("PIPNJ_MEDsecondary");
  }
  
  public boolean getHasPIPNJ_OTHER_LIMSTerm() {
    return hasCovTerm("PIPNJ_OTHER_LIMS");
  }
  
  public productmodel.OptionPIPNJ_MEDDEDUCTType getPIPNJ_MEDDEDUCTTerm() {
    return (productmodel.OptionPIPNJ_MEDDEDUCTType)getCovTerm("PIPNJ_MEDDEDUCT");
  }
  
  public productmodel.TypekeyPIPNJ_MEDDEDUCTappliestoType getPIPNJ_MEDDEDUCTappliestoTerm() {
    return (productmodel.TypekeyPIPNJ_MEDDEDUCTappliestoType)getCovTerm("PIPNJ_MEDDEDUCTappliesto");
  }
  
  public productmodel.OptionPIPNJ_MEDLIMITType getPIPNJ_MEDLIMITTerm() {
    return (productmodel.OptionPIPNJ_MEDLIMITType)getCovTerm("PIPNJ_MEDLIMIT");
  }
  
  public productmodel.GenericPIPNJ_MEDONLYType getPIPNJ_MEDONLYTerm() {
    return (productmodel.GenericPIPNJ_MEDONLYType)getCovTerm("PIPNJ_MEDONLY");
  }
  
  public productmodel.GenericPIPNJ_MED_COPAYType getPIPNJ_MED_COPAYTerm() {
    return (productmodel.GenericPIPNJ_MED_COPAYType)getCovTerm("PIPNJ_MED_COPAY");
  }
  
  public productmodel.GenericPIPNJ_MEDsecondaryType getPIPNJ_MEDsecondaryTerm() {
    return (productmodel.GenericPIPNJ_MEDsecondaryType)getCovTerm("PIPNJ_MEDsecondary");
  }
  
  public productmodel.PackagePIPNJ_OTHER_LIMSType getPIPNJ_OTHER_LIMSTerm() {
    return (productmodel.PackagePIPNJ_OTHER_LIMSType)getCovTerm("PIPNJ_OTHER_LIMS");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_NJInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_NJ>() {
      public productmodel.CAPIP_NJ newEmptyInstance() {
        return new productmodel.CAPIP_NJ();
      }
      
      
    });
  }
}