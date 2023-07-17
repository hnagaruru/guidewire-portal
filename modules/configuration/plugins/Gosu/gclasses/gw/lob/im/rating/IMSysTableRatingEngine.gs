package gw.lob.im.rating

uses gw.api.locale.DisplayKey
uses gw.api.domain.financials.PCFinancialsLogger
uses gw.lob.im.rating.sign.IMSignRatingEngine
uses gw.lob.im.rating.ce.ContractorsEquipmentRatingEngine
uses gw.lob.im.rating.ar.IMAccountsReceivableRatingEngine
uses gw.plugin.policyperiod.impl.SysTableRatingPlugin
uses gw.rating.AbstractRatingEngine
uses gw.rating.CostData

uses java.lang.IllegalArgumentException
uses java.util.Map
uses java.util.List

@Export
class IMSysTableRatingEngine extends AbstractRatingEngine<IMLine> {

  construct(imLineArg : IMLine) {
    super(imLineArg)
  }

  override function rateOnly() : Map<PolicyLine, List<CostData>> {
    rateByPart()
    CostDatas = mergeCosts(CostDatas)
    updateAmounts(CostDatas)
    return CostDataMap
  }

  // IM is rated on a 365-day term
  override protected property get NumDaysInCoverageRatedTerm() : int {
    return 365
  }


  //
  // PRIVATE SUPPORT FUNCTIONS
  //
  private function rateByPart() {
    PolicyLine.getVersionsOnDates<InlandMarineLine>(AllEffectiveDates).each(\ version -> {
      if (version.Branch.isCanceledSlice()) {
        PCFinancialsLogger.logInfo(DisplayKey.get("Web.Policy.IM.RatingEngine.Logger.isCanceledSlice", version,version.SliceDate))
      }
      else {
        PCFinancialsLogger.logInfo(DisplayKey.get("Web.Policy.IM.RatingEngine.Logger.Version", version, version.SliceDate))
        version.IMCoverageParts.each(\ part -> ratePart(part))
        PCFinancialsLogger.logInfo(DisplayKey.get("Web.Policy.IM.RatingEngine.Logger.RateDone", version,version.SliceDate))
      }})
  }

  private function ratePart(part : IMCoveragePart) {
    switch (part.Subtype) {
      case TC_IMSIGNPART :
        rateSignPart(part as IMSignPart)
        break
      case TC_CONTRACTORSEQUIPPART :
        rateContractorsEquipmentPart(part as ContractorsEquipPart)
        break
      case TC_IMACCOUNTSRECPART :
        rateAccountsReceivablePart(part as IMAccountsRecPart)
        break
      default :
        throw new IllegalArgumentException(DisplayKey.get("Web.Policy.IM.RatingEngine.Exception", part.Subtype.Code))
    }
  }

  private function rateSignPart(part : IMSignPart) {
    logPreamble("Signs")
    addCosts(IMSignRatingEngine.rate(part, RateCache))
    logPostamble("Signs")
  }

  private function rateContractorsEquipmentPart(part : ContractorsEquipPart) {
    logPreamble("Contractors Equipment")
    addCosts(ContractorsEquipmentRatingEngine.rate(part, RateCache))
    logPostamble("Contractors Equipment")
  }

  private function rateAccountsReceivablePart(part : IMAccountsRecPart) {
    logPreamble("Accounts Receivable")
    addCosts(IMAccountsReceivableRatingEngine.rate(part, RateCache))
    logPostamble("Accounts Receivable")
  }

  private function logPreamble(part : String) {
    log(part, true)
  }

  private function logPostamble(part : String) {
    log(part, false)
  }

  private function log(part : String, isPreamble : boolean) {
    PCFinancialsLogger.logInfo (DisplayKey.get("Web.Policy.IM.RatingEngine.Logger.Log", part) 
          + (isPreamble ?DisplayKey.get("Web.Policy.IM.RatingEngine.Logger.Log.NotDone") : DisplayKey.get("Web.Policy.IM.RatingEngine.Logger.Log.Done")))
  }
}