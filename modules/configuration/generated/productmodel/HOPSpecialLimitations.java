package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPSpecialLimitations.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPSpecialLimitations extends entity.HOPLineCond {
  protected HOPSpecialLimitations()  {
    super((java.lang.Void)null);
  }
  
  public HOPSpecialLimitations(entity.PolicyPeriod branch)  {
    super(branch, "ztsg0okd8lvaha25n1nr1cmt9n9");
  }
  
  public HOPSpecialLimitations(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ztsg0okd8lvaha25n1nr1cmt9n9");
  }
  
  public productmodel.OptionHOPSpecialLimitationsAntennasType getHOPSpecialLimitationsAntennasTerm() {
    return (productmodel.OptionHOPSpecialLimitationsAntennasType)getCovTerm("zovj2ab6jliu2cpcgt8t5e0pkt8");
  }
  
  public productmodel.OptionHOPSpecialLimitationsBusinessPropAwayType getHOPSpecialLimitationsBusinessPropAwayTerm() {
    return (productmodel.OptionHOPSpecialLimitationsBusinessPropAwayType)getCovTerm("z0liqiabieihh2u4b78uv8eubma");
  }
  
  public productmodel.OptionHOPSpecialLimitationsBusinessPropType getHOPSpecialLimitationsBusinessPropTerm() {
    return (productmodel.OptionHOPSpecialLimitationsBusinessPropType)getCovTerm("z2pjest4088f6c6idis3bkbcaga");
  }
  
  public productmodel.OptionHOPSpecialLimitationsFirearmsType getHOPSpecialLimitationsFirearmsTerm() {
    return (productmodel.OptionHOPSpecialLimitationsFirearmsType)getCovTerm("zgvgc6kfd4kdj5d7fj90v0duef9");
  }
  
  public productmodel.PackageHOPSpecialLimitationsFursType getHOPSpecialLimitationsFursTerm() {
    return (productmodel.PackageHOPSpecialLimitationsFursType)getCovTerm("zeejsfv9csqd28nlec42dokansb");
  }
  
  public productmodel.OptionHOPSpecialLimitationsMoneyType getHOPSpecialLimitationsMoneyTerm() {
    return (productmodel.OptionHOPSpecialLimitationsMoneyType)getCovTerm("zp0js8b1h834p79tnq510etko38");
  }
  
  public productmodel.OptionHOPSpecialLimitationsPortalElecEquipType getHOPSpecialLimitationsPortalElecEquipTerm() {
    return (productmodel.OptionHOPSpecialLimitationsPortalElecEquipType)getCovTerm("zgoioeu83gfu10k83gvnliq03ub");
  }
  
  public productmodel.OptionHOPSpecialLimitationsSecuritiesType getHOPSpecialLimitationsSecuritiesTerm() {
    return (productmodel.OptionHOPSpecialLimitationsSecuritiesType)getCovTerm("zikgcjuc8anldbj78jksmm053bb");
  }
  
  public productmodel.OptionHOPSpecialLimitationsSilverwareType getHOPSpecialLimitationsSilverwareTerm() {
    return (productmodel.OptionHOPSpecialLimitationsSilverwareType)getCovTerm("zsmiaic91n1hadskmshpdi8ag9a");
  }
  
  public productmodel.OptionHOPSpecialLimitationsTrailersType getHOPSpecialLimitationsTrailersTerm() {
    return (productmodel.OptionHOPSpecialLimitationsTrailersType)getCovTerm("zcig4ohvp1pmi65gllv59lel679");
  }
  
  public productmodel.OptionHOPSpecialLimitationsWatercraftType getHOPSpecialLimitationsWatercraftTerm() {
    return (productmodel.OptionHOPSpecialLimitationsWatercraftType)getCovTerm("zj0ga1rts1gnkcia2sohiq8rd8a");
  }
  
  public boolean getHasHOPSpecialLimitationsAntennasTerm() {
    return hasCovTerm("zovj2ab6jliu2cpcgt8t5e0pkt8");
  }
  
  public boolean getHasHOPSpecialLimitationsBusinessPropAwayTerm() {
    return hasCovTerm("z0liqiabieihh2u4b78uv8eubma");
  }
  
  public boolean getHasHOPSpecialLimitationsBusinessPropTerm() {
    return hasCovTerm("z2pjest4088f6c6idis3bkbcaga");
  }
  
  public boolean getHasHOPSpecialLimitationsFirearmsTerm() {
    return hasCovTerm("zgvgc6kfd4kdj5d7fj90v0duef9");
  }
  
  public boolean getHasHOPSpecialLimitationsFursTerm() {
    return hasCovTerm("zeejsfv9csqd28nlec42dokansb");
  }
  
  public boolean getHasHOPSpecialLimitationsMoneyTerm() {
    return hasCovTerm("zp0js8b1h834p79tnq510etko38");
  }
  
  public boolean getHasHOPSpecialLimitationsPortalElecEquipTerm() {
    return hasCovTerm("zgoioeu83gfu10k83gvnliq03ub");
  }
  
  public boolean getHasHOPSpecialLimitationsSecuritiesTerm() {
    return hasCovTerm("zikgcjuc8anldbj78jksmm053bb");
  }
  
  public boolean getHasHOPSpecialLimitationsSilverwareTerm() {
    return hasCovTerm("zsmiaic91n1hadskmshpdi8ag9a");
  }
  
  public boolean getHasHOPSpecialLimitationsTrailersTerm() {
    return hasCovTerm("zcig4ohvp1pmi65gllv59lel679");
  }
  
  public boolean getHasHOPSpecialLimitationsWatercraftTerm() {
    return hasCovTerm("zj0ga1rts1gnkcia2sohiq8rd8a");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPSpecialLimitationsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPSpecialLimitations>() {
      public productmodel.HOPSpecialLimitations newEmptyInstance() {
        return new productmodel.HOPSpecialLimitations();
      }
      
      
    });
  }
}